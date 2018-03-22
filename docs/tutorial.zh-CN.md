# 使用 Watcon Assistant（原 Watson Conversation） 打造微信聊天机器人

Watcon Assistant 是一个集成了机器学习，自然语言分析和对话工具的认知服务平台。用户可以快速的在 Watson 提供的 Web 界面上进行训练，快速的打造出一个能进行自然语言交流的机器人。

在本篇教程中，我将注重介绍如何在微信公众号/订阅号中应用 Watson Assistant 来与用户进行对话。

## 准备

### IBM认知学堂 (IBM Cognitive Class)
1. 注册用户讲获得价值1200美元的IBM Cloud云服务促销卷。https://cognitiveclass.ai/zh/ibm-cloud-offer-cn/
2. 此页面讲将告诉您如何使用所获得的促销卷。http://cognitiveclass.ai/zh/applying-ibm-cloud-promo-code/

### IBM Cloud 账号
1. 你需要一个 IBM Cloud 账号，可以通过这个链接登陆或者注册，[http://ibm.biz/wechat-watson-conversation](http://ibm.biz/wechat-watson-conversation)。

2. 打开 [Watonson Assistant 介绍页](http://ibm.biz/wechat-watson-conversation)，建立服务，如图。点击确认建立服务。

    [![https://gyazo.com/41912742cc523201ca114e6ade3855bf](https://i.gyazo.com/41912742cc523201ca114e6ade3855bf.jpg)](https://gyazo.com/41912742cc523201ca114e6ade3855bf)

3. 把用户名与密码记下来，并点击 `Launch Tool` 打开图形化工具窗口。

    [![https://gyazo.com/bf94d4dceefad078a32c904de10b663d](https://i.gyazo.com/bf94d4dceefad078a32c904de10b663d.png)](https://gyazo.com/bf94d4dceefad078a32c904de10b663d)

    [![https://gyazo.com/26bcbea701ea09c2b1d59e2381e1a728](https://i.gyazo.com/26bcbea701ea09c2b1d59e2381e1a728.png)](https://gyazo.com/26bcbea701ea09c2b1d59e2381e1a728)

4. 点击创建创建新的 `Workspace`。

    [![https://gyazo.com/3f2228e6e292e12d362e25e180e21236](https://i.gyazo.com/3f2228e6e292e12d362e25e180e21236.png)](https://gyazo.com/3f2228e6e292e12d362e25e180e21236)

    [![https://gyazo.com/32f88a738df88406a0c8477fb3bf7da8](https://i.gyazo.com/32f88a738df88406a0c8477fb3bf7da8.png)](https://gyazo.com/32f88a738df88406a0c8477fb3bf7da8)

5. 将 `Workspace ID` 记下来。

    [![https://gyazo.com/139961533ed84e884c6bd18372090e7b](https://i.gyazo.com/139961533ed84e884c6bd18372090e7b.png)](https://gyazo.com/139961533ed84e884c6bd18372090e7b)


### 微信公众号，订阅号
1. 你需要一个可用的微信订阅号或者公众号。如果还没有，可以在这里注册 [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)。

2. 注册完成之后可以在页面下方找到 `开发 - 基本配置` 进行开发者配置，点击 `修改配置`，

    [![https://gyazo.com/fa38412352c85ea1b732643498b55125](https://i.gyazo.com/fa38412352c85ea1b732643498b55125.png)](https://gyazo.com/fa38412352c85ea1b732643498b55125)

3. 按图提示输入自己所选的 `Token`，并自动生成 `EncodingAESKey`。推荐使用明文模式，因为本文不会涵盖如何对微信的信息进行解密。然后将 `Token` 与 `EncodingAESKey` 牢记下来，并保持该窗口打开。由于我们还未设置服务器，因此提交是不会通过的。

    [![https://gyazo.com/f86646e4bc51b8f02d948938d076baa4](https://i.gyazo.com/f86646e4bc51b8f02d948938d076baa4.png)](https://gyazo.com/f86646e4bc51b8f02d948938d076baa4)


## 部署

### 使用 IBM Cloud - Cloud Foundry App
1. 直接下载我们的demo。
    ```bash
    git clone git@github.com:cognitive-class/wechat-watson-conversation.git
    ```

2. 我们刚刚注册的 IBM Cloud 账号提供免费的 Cloud Foundry App服务，打开这个连接来创建，[https://ibm.biz/wechat-cf](https://ibm.biz/wechat-cf)

3. 输入必要的信息，并且记住图中所分配的应用域名，e.g. `my-wechat-demo.mybluemix.net`。点击创建

    [![https://gyazo.com/3cc4d7d7d8948083568fb887bbb22151](https://i.gyazo.com/3cc4d7d7d8948083568fb887bbb22151.png)](https://gyazo.com/3cc4d7d7d8948083568fb887bbb22151)

4. 进入设置页面，输入你刚刚所选的环境变量，都是以上步骤所获得的
    - `WATSON_USERNAME` - Watson Assistant 服务的用户名密码与workspace ID
    - `WATSON_PASSWORD`
    - `WATSON_WORKSPACE_ID`
    - `WECHAT_TOKEN` - 微信开发者配置里的token与encoding key
    - `WECHAT_ENCODING_AES_KEY`

    [![https://gyazo.com/9aec39bd40a3eed2b75d9abe9dc0df10](https://i.gyazo.com/9aec39bd40a3eed2b75d9abe9dc0df10.png)](https://gyazo.com/9aec39bd40a3eed2b75d9abe9dc0df10)

5. 下载 IBM Cloud CLI 来部署应用，[https://console.bluemix.net/docs/cli/reference/bluemix_cli/download_cli.html#download_install](https://console.bluemix.net/docs/cli/reference/bluemix_cli/download_cli.html#download_install)

    ```bash
    bx login # 选择对应的数据中心
    bx target --cf # 设置对应的组织与空间
    ```
6. 部署

    ```bash
    bx cf push
    ```

7. 最后应用部署完毕之后，请回头微信公众号开发者设置，输入 Cloud Foundry App 的应用链接。然后按提交即可。

    [![https://gyazo.com/f86646e4bc51b8f02d948938d076baa4](https://i.gyazo.com/f86646e4bc51b8f02d948938d076baa4.png)](https://gyazo.com/f86646e4bc51b8f02d948938d076baa4)

## 最后

完成以上步骤，可以通过在IBM Cognitive Class（认知学堂）的 [How to build a chatbot](https://cognitiveclass.ai/courses/how-to-build-a-chatbot/) 课程来学习如何打造一个聊天机器人，建立对话。在你编辑机器人的同时，你可以给随时Conversation的Web应用，或者在微信给公众号发送消息进行测试。

在 [csv](/csv) 文件夹下有一定量用来训练聊天机器人的样本数据，你也直接将这些数据用在你的机器人上。
