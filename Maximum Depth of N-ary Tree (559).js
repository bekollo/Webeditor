var maxDepth = function(root) {
    if(!root) return 0;
    
    function callDFS(node) {
        if(!node) return;
        let maxDepth = 0;
        for(let child of node.children) {
            const childDepth = callDFS(child);
            if(childDepth > maxDepth) maxDepth = childDepth;
        }
        return maxDepth + 1;
    }
    return callDFS(root);
};