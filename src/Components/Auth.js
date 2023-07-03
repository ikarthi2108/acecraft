export const Authentication ={
    isAuthenticated: false,
    login(callback){
        Authentication.isAuthenticated = true;
        callback();
    },
    logout(callback){
        Authentication.isAuthenticated=false;
        callback();
    },
};