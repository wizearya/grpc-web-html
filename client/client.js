const {EchoRequest,
       ServerStreamingEchoRequest} = require('./echo_pb.js.js.js.js');
const {EchoServiceClient} = require('./echo_grpc_web_pb.js.js.js.js');
const {EchoApp} = require('../echoapp.js');
const grpc = {};
grpc.web = require('grpc-web');

var echoService = new EchoServiceClient('http://'+window.location.hostname+':8080', null, null);

var echoApp = new EchoApp(
  echoService,
  {
    EchoRequest: EchoRequest,
    ServerStreamingEchoRequest: ServerStreamingEchoRequest
  },
  {
    checkGrpcStatusCode: function(status) {
      if (status.code != grpc.web.StatusCode.OK) {
        EchoApp.addRightMessage('Error code: '+status.code+' "'+
                                status.details+'"');
      }
    }
  }
);

echoApp.load();
