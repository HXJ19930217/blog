export const Getword = () => {
    axios({
        method: 'get',
        url: ' https://v1.hitokoto.cn',
        params: {},
    }).then((response) => {
        InsertText(response.data);
    });
};