import React, { useEffect } from 'react';
import axios from 'axios';

export default function Email(){
    // url --request POST \
    // --url https://api.sendgrid.com/v3/mail/send \
    // --header "Authorization: Bearer $SENDGRID_API_KEY" \
    // --header 'Content-Type: application/json' \
    // --data '{"personalizations": [{"to": [{"email": "test@example.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}'

    useEffect(() => {

        var SENDGRID_API_KEY='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';
        const api = axios.create({
            url: 'https://api.sendgrid.com/v3/mail/send',
            data: {
                "personalizations": [{
                        "to":
                            [{
                                "email": "arroba.lewi@gmail.com"
                            }]
                    }],
                "from": {"email": "test@example.com"},
                "subject": "Sending with SendGrid is Fun",
                "content": [{
                    "type": "text/plain",
                    "value": "and easy to do anywhere, even with cURL"}]
                },
            beforeSend: function(xhr) {
                 xhr.setRequestHeader("Content-Type", "application/json");
                 xhr.setRequestHeader("Authorization", `Bearer ${SENDGRID_API_KEY}`);
            }, success: function(data){
                console.log(data)
            }
        });
        api.post().then(res => console.log(res)).catch(err => console.log(err));
    },[]);

    return <h1>TESTE</h1>
}