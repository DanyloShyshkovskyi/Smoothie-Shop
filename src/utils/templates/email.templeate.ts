export const EMAIL_TEMPLATE_STYLE = `
    <style>
        h2 {
            width: 100%;
            text-align: right;
            margin: 35px 0 20px 0;
            font-weight: normal;
            padding-right: 25px;
            box-sizing: border-box;
        }
        h2 span {
            font-weight: bold;
        }
        ul {
            display: block;
            list-style-type: none;
            padding: 0 40px 0 0;
        }
        li {
            height: 70px;
            padding: 25px 25px 25px 0;
            display: flex;
            border-bottom: 1px darkgrey solid;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            border-bottom: 1px darkgrey solid;
            margin-left: 0;
            width: 100%;
        }
        li img {
            height: 100px;
            margin: auto auto auto 30px;
        }
        li h1 {
            font-size: 13px;
            text-transform: capitalize;
            margin: auto;
        }
        li p.price, li p.count {
            margin: auto;
        }
        li p.price, li p.count span {
            font-size: 14px;
            line-height: 25px;
            font-weight: 600;
            margin-left: 20px;
        }
        li p.price, h2 span {
            color: darkseagreen;
        }
        li p.price {
        margin: auto 30px auto auto;
        }
        li p.count span {
            margin-left: 0;
        }
        .cart {
            margin: 15px 0;
            /*background: antiquewhite;*/
        }
        
    </style>
`

export const EMAIL_TEMPLATE_START = `
    <html>
        <head>
            ${EMAIL_TEMPLATE_STYLE}
        </head>
        <body>
        <div class="cart"
            <ul>

`

export const EMAIL_TEMPLATE_END = `
            </div>
        </body>
    </html>
`