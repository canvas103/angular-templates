/**
 * Created by chenghui on 10/6/2015.
 */
var isPalindrome = function (x) {
    var k = 1, y = x, m;
    if (x < 0) {
        return false;
    }

    while (x / k >= 10) {
        k = k * 10;
    }
    m = k;
    while (m > 1) {
        console.log(k, m);

        if ((x - x % k) / k != y % 10) {
            return false;
        }
        x = x % k;
        y = (y - y % 10) / 10;
        k = k / 10;
        m = m / 100;
    }

    return true;
};
var merge = function (nums1, m, nums2, n) {
    var i;
    for (i = 0; i < m; i++) {
        while (n && nums1[i] >= nums2[0]) {
            if (nums1[i] === nums2[0]) {
                nums2.shift();
            }
            else {
                nums1.splice(i, 0, nums2.shift());
                i++;
                m++;
            }
            n--;
        }
        if (n === 0) break;
    }
    while (nums2.length) {
        nums1.push(nums2.shift());
    }
};
var candy = function (ratings) {
    var len = ratings.length, up = 0, down = 0, res = 0, i;
    for (i = 0; i < len - 1; i++) {
        if (i && i !== (len - 2) && ratings[i - 1] < ratings[i] && ratings[i] > ratings[i + 1]) {
            res += (up + 1) * (up + 2) / 2 + (down + 1) * (down + 2) / 2 - 1 - Math.min(up, down);
            up = 0;
            down = 0;
        }

        if (ratings[i] < ratings[i + 1])up++;

        if (ratings[i] > ratings[i + 1])down++;
        if (ratings[i] === ratings[i + 1])res++;
    }
    res += (up + 1) * (up + 2) / 2 + (down + 1) * (down + 2) / 2 - 1 - Math.min(up, down);

    return res + 1;

};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseKGroup = function (head, k) {
    var res = new ListNode(0);
    var h = head, i = 0;
    while (h) {
        h = h.next;
        i++;
    }
    if (i < k || k === 1) return head;
    var tail = res.next;
    while (head && k) {
        res.next = head;
        head = head.next;
        res.next.next = tail;
        tail = res.next;
        k--;
    }
    while (tail.next) {
        tail = tail.next;
    }
    tail.next = reverseKGroup(head, k);
    return res.next;
};
var a = new ListNode(1);
a.next = new ListNode(2);
var findMedianSortedArrays = function(nums1, nums2) {
    var an=[],m=nums1.length,n=nums2.length;
    while(m+n){
        if(nums1.length===0||nums1[0] >= nums2[0]) {
            an.push(nums2.shift());
            n--;
        }else{
            an.push(nums1.shift());
            m--;
        }
    }
    console.log(an);
    if((m+n)%2) return an[(m+n-1)/2];
    return an[(m+n)/2]/2+an[(m+n)/2-1]/2;
};

console.log(findMedianSortedArrays([],[1]));