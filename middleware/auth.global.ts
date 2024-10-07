
export default defineNuxtRouteMiddleware((to: any, from: any) => {
    const { showVideoCorner } = useNavigateStore();

    if (from.params.tab === 'chats') {
        showVideoCorner()
    }
})