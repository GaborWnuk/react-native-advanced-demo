package pl.wp.wdi

import android.content.Intent

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise;

import android.util.Log

class FancyManager(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "FancyNativeModule"
    }

    /* 
    GW: Manager class must have at least one method to be visible as
    NativeModule!
     */
    @ReactMethod
    fun addNumbers(first: Int, second: Int, promise: Promise) {
        promise.resolve(first + second);
    }
}