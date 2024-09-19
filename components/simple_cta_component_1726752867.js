<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" style="min-height: 790px"          class="bg-gray-50 dark:bg-gray-800 flex-1">
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

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                        Start Shopping Now
                        Start Shopping Now
                    </a>
                </div>

                <div id="shopping-form-container" class="mt-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Shopping Cart</h3>
                    <form @submit.prevent="submitOrder" class="space-y-4">
                        <div v-for="(item, index) in items" :key="index" class="flex items-center space-x-4">
                            <input v-model="item.quantity" type="number" min="0" :placeholder="'Quantity for ' + item.name" class="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <span class="flex-1 text-gray-700 dark:text-gray-300">{{ item.name }} - ${{ item.price.toFixed(2) }}</span>
                        </div>
                        <button type="submit" class="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Place Order</button>
                    </form>
                </div>
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
            items: [
                { name: 'Widget A', price: 9.99, quantity: 0 },
                { name: 'Gadget B', price: 14.99, quantity: 0 },
                { name: 'Doohickey C', price: 19.99, quantity: 0 }
            ]
        };
    },
    methods: {
        submitOrder() {
            // Calculate total
            const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
            console.log(`Order submitted. Total: $${total.toFixed(2)}`);
            // Here you would typically send the order to a server
        }
    }
};
</script>