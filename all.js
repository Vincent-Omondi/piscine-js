async function all(objs = {}) {
    if (!Object.keys(objs).length) return {};

    const res = {};
    for (const key of Object.keys(objs)) {
        res[key] = await objs[key];
    }

    return res;
};
