package pl.wp.wdi

import android.graphics.Color;
import android.view.View

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class FancyViewManager: SimpleViewManager<View>() {
    override fun getName(): String {
        return "FancyViewManager"
    }

    override fun createViewInstance(reactContext: ThemedReactContext?): View {
        var view = View(reactContext);
        view.setBackgroundColor(Color.MAGENTA);
        return view
    }
}
