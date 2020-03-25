# grpc-web-html
gRPCを使うメリット  
- HTTP/2を活かした高速な双方向ストリーミング通信が可能  

デメリット　　
- データがシリアライズされるのでデバッグはやりづらそう

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
`$ brew intall protobuf
