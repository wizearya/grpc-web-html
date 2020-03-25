# grpc-web-html
gRPCを使うメリット  
- HTTP/2を活かした高速な双方向ストリーミング通信が可能。  
- 通信速度が速い。  
- リクエストパラメータのバリデーション処理や、レスポンスフォーマットの定義などを自動生成できる。  
- protoファイルに記述した内容からサーバコードとクライアントコードの雛形を自動生成できる。
- gRPCフレームワークmali.jsを使えばprotoファイルから直接通信やり取りが行える.protobufコマンドでファイルを自動生成する必要はない。

デメリット　　
- データがシリアライズされるのでデバッグはやりづらい。　　
- エコシステム、デバッグツールやAPIドキュメント生成などがREST APIに比べてあまり揃っていない。現時点ではドキュメントも少ない。  
- フロントエンドJavaScriptで直接使用できない(grpc-gatewayなどが必要になる)、サンプルではenvoyを使用。他にはnginxなどでも使用可能。


## Start Client
`$ python -m simpleHTTPServer 8081`  
- loacalhost:8081 をブラウザーで起動その後clientのディレクトリーに行くとサンプルが起動します。
## Start Server
`$ docker-compose up`  
- 上記のコマンドでサーバー側を起動。

`$ docker-compose down`  
- 上記のコマンドで立ち上げてるサーバーを停止させる。

`$ docker-compose build`  
- Dockerfileの変更を反映させるにはにはbuildを実行します。
## Build Client
Client側のpackage.jsonに記載されたパッケージをインストールします。  
- `$ cd client`  
- `$ npm install`
## Build Server
Server側も同じくパッケージをインストールします。　　
- `$ cd server`  
- `$ npm install`  　　
## 準備する事
protoファイルから各言語ソースを自動生成するにはprotocというツールを使います。macではHomebrewでインストールできます。  
- `$ brew intall protobuf`   

protoファイルから定義ファイルを自動生成するには以下のコマンドを使います。  
- `$ sh generate.sh`

これによりgenerate.shに書かれたコマンドが実行され定義ファイルが指定のディレクトリーに自動生成されます。  

./dist/main.jsファイルを生成.  
- `$ npx webpack`  

上記のコマンドを使いmain.jsファイルを自動生成してくれます。  
## エラー発生時の対処
`'proto' is not defined`と言うエラーが発生した場合  
- `/* eslint-disable */`と言うコメントをprotoファイルから自動生成されたファイルに追加します。eslintのチェックを外す事でエラーが消えるはず
## gRPCが向いているケース  
<dl>
 <dt>モバイルユーザが利用するサービス</dt>
 <dd>シリアライズやHTTP/2によりデータ量が減るためモバイル端末の通信量制限にかかりにくいため</dd>
 <dt>通信速度が求められるケース</dt>
 <dd>gRPCの通信速度は速いから</dd>
 <dt>Microservicesで色々な言語を使いたいケース</dt>
 <dd>gRPCでは複数言語対応可だから</dd>
</dl>

 
