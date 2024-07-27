export function escape() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginal.apply(this, args);
            if (typeof retorno === 'string') {
                retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno;
        };
        return descriptor;
    };
}
