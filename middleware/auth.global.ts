
export default defineNuxtRouteMiddleware((to: any, from: any) => {
    console.log('AUTH MIDDLEWARE', to, from)
    const { showVideoCorner } = useNavigateStore();

    if (from.params.tab === 'chats') {
        showVideoCorner()
    }
})