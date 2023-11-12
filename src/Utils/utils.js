export const getSplitedName = (name) => {
    const splitedName = name.split(' ');
    return splitedName[0][0] + splitedName[1][0];
}