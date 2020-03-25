# grpc-web-html
gRPCを使うメリット  
- HTTP/2を活かした高速な双方向ストリーミング通信が可能。  
- 通信速度が速い。  
- リクエストパラメータのバリデーション処理や、レスポンスフォーマットの定義などを自動生成できる。  
- protoファイルに記述した内容からサーバコードとクライアントコードの雛形を自動生成できる。

デメリット　　
- データがシリアライズされるのでデバッグはやりづらい。　　
- エコシステム、デバッグツールやAPIドキュメント生成などがREST APIに比べてあまり揃っていない。現時点ではドキュメントも少ない。  
- フロントエンドJavaScriptで直接使用できない(grpc-gatewayなどが必要になる)。


## Start Client
`$ phyton -m simpleHTTPServer 8081`  
- loacalhost:8081 をブラウザーで起動その後clientのディレクトリーに行くとサンプルが起動します。
## Start Server
`$ docker-compose up`  
- 上記のコマンドでサーバー側を起動。

`$ docker-compose down`  
- 上記のコマンドで立ち上げてるサーバーを停止させる。

`$ docker-compose build`  
- Dockerfileの変更を反映させるにはにはbuildを実行します。
## Build Client
`$ cd client`  
`$ npm install`
## Build Server
`$ cd server`  
`$ npm install`  　　
## 準備する事
protoファイルから各言語ソースを自動生成するにはprotocというツールを使います。macではHomebrewでインストールできます。  
- `$ brew intall protobuf`   

protoファイルから定義ファイルを自動生成するには以下のコマンドを使います。  
- `$ sh generate.sh`

これによりgenerate.shに書かれたコマンドが実行され定義ファイルが指定のディレクトリーに自動生成されます。
 
