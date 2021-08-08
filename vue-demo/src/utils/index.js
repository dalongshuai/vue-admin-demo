// 函数监听
export const ElemListen = (obj, type, callback) => {
    obj.addEventListener(type, callback);
    return () => {
        obj.removeEventListener(type, callback);
    };
};

/* session */
export const session = {
    get: (key) => {
        var data = sessionStorage[key];
        if(!data || data === 'null') {
            return null;
        }
        return JSON.parse(data);
    },
    set: (key, value) => {
        sessionStorage[key] = JSON.stringify(value);
    },
    // 删除
    remove (key) {
        sessionStorage.removeItem(key);
    },
    // 清除全部
    clear () {
        sessionStorage.clear();
    }
};
/* session */
export const storage = {
    get: (key) => {
        var data = localStorage[key];
        if(!data || data === 'null') {
            return null;
        }
        return JSON.parse(data);
    },
    set: (key, value) => {
        localStorage[key] = JSON.stringify(value);
    },
    // 删除
    remove (key) {
        localStorage.removeItem(key);
    }
};
