<template>
    <div>
        <form 
        class="form-signin"
        >
        <h1 class="h3 mb-3 font-weight-normal" style="margin-top: 100px">Please log in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input 
            type="text"
            id="inputEmail" 
            class="form-control"
            placeholder="Email address" 
            autofocus=""
            v-model="email"
        >
        <label for="inputPassword" class="sr-only">Password</label>
        <input 
            type="password" 
            id="inputPassword" 
            class="form-control" 
            placeholder="Password" 
            v-model="password"
        >      
        <button 
            class="btn btn-lg btn-primary btn-block" 
            type="submit"
            
        >
        Log in
        </button> 
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<style>

</style>
