
export default defineNuxtRouteMiddleware((to: any, from: any) => {
    const { showVideoCorner, hideVideoCorner } = useNavigateStore();

    if (from.params.tab === 'chats') {
        showVideoCorner()
    }
    if (to.params.tab === 'chats') {
        hideVideoCorner()
    }
})