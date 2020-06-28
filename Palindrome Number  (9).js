var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    let palindrome = x+'';
    let p1=0, p2=palindrome.length-1;
    while(p1<p2){
        if(palindrome[p1]!==palindrome[p2])
            return false;
        else {p1++; p2--}
    }
    return true;
};

var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    let reversed=0, num=x;
    while(num>0){
        reversed=reversed*10 + num%10;
        num=Math.floor(num/10);
    }
    return reversed===x;
}