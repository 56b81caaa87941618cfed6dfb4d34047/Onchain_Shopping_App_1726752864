<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" style="min-height: 270px" class="bg-pink-100 dark:bg-pink-900 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4  font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Shop Securely on the Blockchain
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                        Experience seamless, decentralized e-commerce with our cutting-edge onchain marketplace
                    </p>
                </div>

                <div id="cta-image-container" class="flex justify-center mb-4">
                    <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Onchain_Shopping_App_1726752864/main/images/8a045053e9c1493a9b3645c1ac422a9c.jpeg" alt="E-commerce on the Blockchain" class="max-w-full h-auto rounded-lg" />
                </div>

                <div id="shopping-form-container" class="mt-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Shop Now</h3>
                    <form @submit.prevent="submitOrder">
                        <div class="mb-4">
                            <label for="item" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Item</label>
                            <select id="item" v-model="selectedItem" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500">
                                <option value="">Choose an item</option>
                                <option value="crypto-wallet">Crypto Wallet</option>
                                <option value="nft-art">NFT Art</option>
                                <option value="blockchain-book">Blockchain Book</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input type="number" id="quantity" v-model="quantity" min="1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter quantity" required>
                        </div>
                        <button type="submit" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null,
            selectedItem: '',
            quantity: 1
        };
    },
    methods: {
        // Submit order method
        submitOrder() {
            console.log(`Order placed: ${this.quantity} ${this.selectedItem}(s)`);
            // Add your order processing logic here
            this.selectedItem = '';
            this.quantity = 1;
        }
        // End of submit order method
    }
};
</script>