chrome.app.runtime.onLaunched.addListener(launch);

function launch() {
    chrome.app.window.create("window.html", {
            "bounds": {
                "width": 424,
                "height": 666,
            },
            "minWidth": 424,
            "minHeight": 403,
            "frame": "none"
        });
}