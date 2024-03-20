import http from "@/http-common";

class PairService {
    async getAllPairs(userId) {
        return http.get(`/pairs/${userId}`);
    }
    async getAllMatchedPairs(userId) {
        return http.get(`/paired/${userId}`);
    }
    async updatePair(pairData) {
        /**
         * pairData argument should follow this structure
         * 
         * pairData = {
         *  userId: 1,
         *  interestUserId: 3,
         *  blocking: true || false,
         *  interesting: true || false
         * }
         */
        return http.put(`/pairs`, {
            userId: pairData.userId,
            interestUserId: pairData.interestUserId,
            blocking: pairData.blocking,
            interesting: pairData.interesting
        });
    }
}

export default new PairService();