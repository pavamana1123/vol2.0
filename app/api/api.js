var cred = require("./cred.js")

class API {
    constructor(db){
        this.db = db
    }

    async call(req, res) {

        var {body} = req
        var self = this
        console.log(`api - ${req.get("endpoint")}`)
        
        switch(req.get("endpoint")){

            case "/login":
                this.db.execQuery(`
                select * from volunteers where phone='${body.phone}';
                select * from preachers where phone='${body.phone}';
                `).then((r,err)=>{
                    if(err){
                        this.sendError(res, 500, err)
                    }else{
                        if(r[0].length || r[1].length){
                            res.send(r[0] || r[1])
                        }else{
                            this.sendError(res, 404, "User not onboarded")
                        }
                    }
                })
                break

            default:
                this.sendError(res, 404, "Invalid endpoint")
        }
    }

    apiRequest(url, body, method, headers, callback, errcallback){
        fetch(url, {
            method: method || 'POST',
            headers: headers || {
                'content-type': 'text/json',
            },
            body
        })
        .then(res => res.json())
        .then(callback)
        .catch(errcallback);
    }

    sendError(res, code, msg){
        res.status(code)
        res.send({"error":msg})
    }
}

module.exports = API