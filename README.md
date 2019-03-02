# closer
Node.js tool.

Allow to handle shutdown code when receiving shutdown signals.


Example: 

```javascript
import closer from "closer"

closer(()=>console.log("graceful shutdown"))
```
