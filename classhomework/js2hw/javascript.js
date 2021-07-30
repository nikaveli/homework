function gradeRec(num) {
    if (num >= 98) {
        return "A+"
    } else if (num >= 94) {
        return "A"
    } else if (num >= 90) {
        return "A-"
    } else if (num >= 88) {
        return "B+"
    } else if (num >= 84) {
        return "B"
    } else if (num >= 80) {
        return  "B-"  
    } else if (num >= 78) {
        return "C+"
    } else if (num >= 74) {
        return "C"
    } else if (num >= 70) {
        return "C-"
    } else if (num >= 68) {
        return "D+"
    } else if (num >= 64) {
        return "D"
    } else if (num >= 60) {
        return "D-"
    } else {
        return "F"
    }
    }
    console.log(gradeRec(95));