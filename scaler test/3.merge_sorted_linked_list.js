function mergeTwoLists(A, B) {
    let h1 = A;
    let h2 = B;
    if (h1 == null) return h2;
    if (h2 == null) return h1;
    let h3 = null; // head for the new merged LL
    let Temp = null;
    // for identifying the start node of the new LL
    if (h1.data < h2.data) {
        h3 = h1;
        Temp = h1;
        h1 = h1.next;// this maintains head of 1st LL
    } else {
        h3 = h2;
        Temp = h2;
        h2 = h2.next;//// this maintains head of 2st LL
    }
    // for remaining nodes
    while (h1 !== null && h2 !== null) {
        if (h1.data < h2.data) {
            Temp.next = h1;
            h1 = h1.next;
            Temp = Temp.next
        } else {
            Temp.next = h2;
            h2 = h2.next;
            Temp = Temp.next
        }
    }

    // If one of the lists is not fully processed
    if (h1 !== null) {
        Temp.next = h1;
    } else {
        Temp.next = h2;
    }

    return h3;

}