// hello.cc
#include <node.h>
#include <stdio.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Method1(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "hello"));
}

void Method2(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}


void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method1);
  NODE_SET_METHOD(exports, "world", Method2);

}

NODE_MODULE(addon, init)

}  // namespace demo
