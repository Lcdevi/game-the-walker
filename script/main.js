import { level1 } from "./script-level-1.js";
import { level2 } from "./script-level-2.js";
import { level3 } from "./script-level-3.js";


level1(()=>{
    level2(()=>{
        level3()
    })
});