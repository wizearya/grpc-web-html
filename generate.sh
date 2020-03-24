protoc -I=. echo.proto \
--js_out=import_style=commonjs:./client \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client
