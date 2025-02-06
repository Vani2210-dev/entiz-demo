# Code Citations

## License: unknown

https://github.com/HackX-IN/threads_clone/tree/8eb412b76ebc45cf808feb8d5bb738d9dff14cdf/API/models/Post.js

```
[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    replies: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        content: {
            type: String,
            required: true
        }
```

## License: unknown

https://github.com/suryanashwin4u/ecommerce-app/tree/3b93828fc0bd35a54bb96cc5620ee6d982b1d97e/api/index.js

```
('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const cors = require('cors
```

## License: unknown

https://github.com/urielexis64/amazon_clone_app/tree/36aa2bebe896bcddddf50bf15999da9feeab57a0/server/routes/auth.js

```
async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message:
```

## License: MIT

https://github.com/ojaciper/flutter-amazon-clone/tree/ba35aab98c3035606035715754e495e5bbd053ba/server/routes/auth.js

```
", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
```

## License: unknown

https://github.com/Ravishka2000/React_Native-Practice/tree/7e55036b28504fd92941a9bdfefe523884f77990/api/index.js

```
try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered" });
        }
```
