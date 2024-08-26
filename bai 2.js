function check(diem) {
    let diemmoi;
    if (diem < 100 && diem > 0) {
let t= diem%5
        console.log(t)
        if(t>=3 && t!=0){
            diemmoi = diem + 5 - t
            console.log(diemmoi)
        }
    }
}
check(46)
check(47)
check(84)
check(89)
check(-10)