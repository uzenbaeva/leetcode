/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
       let Node = new TreeNode(val);
   let temp=root; 

    if (temp === null) {
        temp = Node;
        return temp;
    }
    else
    {
       while (true) {
        if (Node.val < temp.val) {
            if (temp.left === null) {
                temp.left = Node; 
                break;
            }
            else{
                temp = temp.left;
            }
           
        } else {
            if(temp.right === null) {
                temp.right = Node;
                 break;
            } 
            else{
                temp = temp.right;
            }
        }
      }
    }

    return root;
};