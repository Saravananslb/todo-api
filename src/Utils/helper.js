const success = (payload, msg='') => {
    return {
        status: true,
        message: msg,
        ...payload
    }
};

const failure = (payload, msg='') => {
    return {
        status: false,
        message: msg,
        ...payload
    }
}

module.exports = {
    success,
    failure
}