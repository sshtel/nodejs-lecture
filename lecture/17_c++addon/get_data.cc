// addon.cc
#include <node.h>
#include <stdio.h>

#include "get_data.h"
 

namespace custom_addon {

using v8::Exception;
using v8::Function;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

// This is the implementation of the "add" method
// Input arguments are passed using the
// const FunctionCallbackInfo<Value>& args struct
void GetData(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  // Check the number of arguments passed.
  if (args.Length() < 3) {
    // Throw an Error that is passed back to JavaScript
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  // Check the argument types
  if (!args[0]->IsNumber() || !args[1]->IsNumber() || !args[2]->IsNumber() ) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong arguments")));
    return;
  }

  // Perform the operation
  float param_1 = args[0]->NumberValue() ;
  float param_2 = args[1]->NumberValue();
  float param_3 = args[2]->NumberValue();
  
  char resultBuf[512] = {0, };
  int msglen = 0;
  msglen = sprintf(resultBuf,
          "param : %f %f %f,  result : %f %d %s",
          param_1, param_2, param_3,
          DATA_FLOAT, DATA_INT, DATA_STR
          );

  // Local<Number> temp  = Number::New(isolate, temp_arg);
  // Local<Number> humid = Number::New(isolate, humid_arg);
  // Local<Number> co2   = Number::New(isolate, co2_arg);
  // Local<Number> voc   = Number::New(isolate, voc_arg);
  // Local<Number> dust  = Number::New(isolate, dust_arg);

  // Set the return value (using the passed in
  // FunctionCallbackInfo<Value>&)
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, resultBuf));
}

void RunCallback(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  Local<Function> cb = Local<Function>::Cast(args[0]);
  const unsigned argc = 3;
  Local<Value> argv[3];
  
  argv[0] = { Number::New(isolate, DATA_INT) };
  argv[1] = { Number::New(isolate, DATA_FLOAT) };
  argv[2] = { String::NewFromUtf8(isolate, DATA_STR) };
  cb->Call(Null(isolate), argc, argv);
}

void Init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "getData", GetData);
  NODE_SET_METHOD(exports, "getDataCb", RunCallback);

}

NODE_MODULE(addon, Init)

}  // namespace