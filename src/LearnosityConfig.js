
var Learnosity = require('learnosity-sdk-nodejs');
var learnositySdk = new Learnosity();

class LearnosityConfigInfo {
    learnosityConfig(req, res) {
        try {
            var result = {
                initOptions: learnositySdk.init(
                    "questions",
                    {
                        "consumer_key": "twRp5spenrCfVAa6",
                        "domain": "localhost",
                        "user_id": "demo_student"
                    },
                    process.env.LEARNOSITY_SECRET_KEY,
                    {
                        "type": "local_practice",
                        "state": "initial",
                        "questions": "",
                        "renderSaveButton": true,
                        "renderSubmitButton": true,
                    }
                ),
                initOptionsEditor: {
                    "assetRequest": function (mediaRequested, returnType, callback, attributes) {
                        // Do something.
                    },
                    "configuration": {
                        "consumer_key": "twRp5spenrCfVAa6",
                    },
                    "widget_json": "",

                },
                hook: ".learnosity_questioneditor",
                callbacksEditor: {
                    "readyListener": function () {
                        return true
                        // Question Editor API sucessfully loaded according to pased init options
                        // we can now reliably start calling public methods and listen to events
                        // questionEditorApp.on("widget:ready", function () {
                        // widget has changed, probably as a result of calling setWidget()
                        // });
                    },
                    "errorListener": function (e) {
                        //callback to occur on error
                        console.log("Error code ", e.code);
                        console.log("Error message ", e.message);
                        console.log("Error name ", e.name);
                        console.log("Error name ", e.title);
                    }
                },
                callbacks: {
                    errorListener: function (e) {
                        // Adds a listener to all error codes.
                        console.log("Error Code ", e.code);
                        console.log("Error Message ", e.msg);
                        console.log("Error Detail ", e.detail);
                    },


                    readyListener: function () {
                        // console.log("Learnosity Questions API is ready");
                    },

                    labelBundle: {
                        loadingInfo: "Loading Question...",
                        play: "play"
                    },

                    saveSuccess: function (response_ids) {
                        for (let i = 0; i < response_ids.length; i++) {
                            console.log("Responses saved : ", response_ids[i]);
                        }
                    },

                    saveError: function (e) {
                        console.log("Save failed - error ", e);
                    },

                    saveProgress: function (progress) {
                        console.log("Save progress - ", progress);
                    }
                }
            }
            return result;
        } catch (Exception) {
            res.status(500)
                .send({
                    error: 'Internal Server Error',
                    message: Exception,
                    data: []
                });
        }
    }
}

module.exports = new LearnosityConfigInfo();
