require.config({
    paths: {
    },
    shim: {
    }
});

define(["router"], function (Router) {
    return {
        launch:function () {
            // 애플리게이션의 시작점
            console.log("Application Start");
        }
    }
});