export const useUtils = () => {
    const formatNumber = (num: any) => {
        if (num === null || num === undefined || num === 0 || Number.isNaN(parseFloat(num))) return 0;
        num = Math.round(num * 100) / 100;
        var result = num.toString().replace(/,/g, '');
        return result.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    };

    return {
        formatNumber,
    }
}