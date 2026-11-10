import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/features'
 */
const Controllere11e990c70acccc8d577821f34aa7efa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere11e990c70acccc8d577821f34aa7efa.url(options),
    method: 'get',
})

Controllere11e990c70acccc8d577821f34aa7efa.definition = {
    methods: ["get","head"],
    url: '/features',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/features'
 */
Controllere11e990c70acccc8d577821f34aa7efa.url = (options?: RouteQueryOptions) => {
    return Controllere11e990c70acccc8d577821f34aa7efa.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/features'
 */
Controllere11e990c70acccc8d577821f34aa7efa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere11e990c70acccc8d577821f34aa7efa.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/features'
 */
Controllere11e990c70acccc8d577821f34aa7efa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere11e990c70acccc8d577821f34aa7efa.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/features'
 */
    const Controllere11e990c70acccc8d577821f34aa7efaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere11e990c70acccc8d577821f34aa7efa.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/features'
 */
        Controllere11e990c70acccc8d577821f34aa7efaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere11e990c70acccc8d577821f34aa7efa.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/features'
 */
        Controllere11e990c70acccc8d577821f34aa7efaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere11e990c70acccc8d577821f34aa7efa.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere11e990c70acccc8d577821f34aa7efa.form = Controllere11e990c70acccc8d577821f34aa7efaForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/how-it-works'
 */
const Controllere280bd4480a1a407d040b2ba05691060 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere280bd4480a1a407d040b2ba05691060.url(options),
    method: 'get',
})

Controllere280bd4480a1a407d040b2ba05691060.definition = {
    methods: ["get","head"],
    url: '/how-it-works',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/how-it-works'
 */
Controllere280bd4480a1a407d040b2ba05691060.url = (options?: RouteQueryOptions) => {
    return Controllere280bd4480a1a407d040b2ba05691060.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/how-it-works'
 */
Controllere280bd4480a1a407d040b2ba05691060.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere280bd4480a1a407d040b2ba05691060.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/how-it-works'
 */
Controllere280bd4480a1a407d040b2ba05691060.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere280bd4480a1a407d040b2ba05691060.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/how-it-works'
 */
    const Controllere280bd4480a1a407d040b2ba05691060Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere280bd4480a1a407d040b2ba05691060.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/how-it-works'
 */
        Controllere280bd4480a1a407d040b2ba05691060Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere280bd4480a1a407d040b2ba05691060.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/how-it-works'
 */
        Controllere280bd4480a1a407d040b2ba05691060Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere280bd4480a1a407d040b2ba05691060.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere280bd4480a1a407d040b2ba05691060.form = Controllere280bd4480a1a407d040b2ba05691060Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pricing'
 */
const Controllera6735397690d30570f358ff62fa3ef24 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera6735397690d30570f358ff62fa3ef24.url(options),
    method: 'get',
})

Controllera6735397690d30570f358ff62fa3ef24.definition = {
    methods: ["get","head"],
    url: '/pricing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pricing'
 */
Controllera6735397690d30570f358ff62fa3ef24.url = (options?: RouteQueryOptions) => {
    return Controllera6735397690d30570f358ff62fa3ef24.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pricing'
 */
Controllera6735397690d30570f358ff62fa3ef24.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera6735397690d30570f358ff62fa3ef24.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pricing'
 */
Controllera6735397690d30570f358ff62fa3ef24.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera6735397690d30570f358ff62fa3ef24.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pricing'
 */
    const Controllera6735397690d30570f358ff62fa3ef24Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera6735397690d30570f358ff62fa3ef24.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pricing'
 */
        Controllera6735397690d30570f358ff62fa3ef24Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera6735397690d30570f358ff62fa3ef24.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pricing'
 */
        Controllera6735397690d30570f358ff62fa3ef24Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera6735397690d30570f358ff62fa3ef24.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera6735397690d30570f358ff62fa3ef24.form = Controllera6735397690d30570f358ff62fa3ef24Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
const Controller535fd093ca1d5254af5dc12ac208e8d5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
})

Controller535fd093ca1d5254af5dc12ac208e8d5.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.url = (options?: RouteQueryOptions) => {
    return Controller535fd093ca1d5254af5dc12ac208e8d5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
    const Controller535fd093ca1d5254af5dc12ac208e8d5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
        Controller535fd093ca1d5254af5dc12ac208e8d5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
        Controller535fd093ca1d5254af5dc12ac208e8d5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller535fd093ca1d5254af5dc12ac208e8d5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller535fd093ca1d5254af5dc12ac208e8d5.form = Controller535fd093ca1d5254af5dc12ac208e8d5Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo'
 */
const Controller0efea5765db02e3af45380ee625e3ea3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0efea5765db02e3af45380ee625e3ea3.url(options),
    method: 'get',
})

Controller0efea5765db02e3af45380ee625e3ea3.definition = {
    methods: ["get","head"],
    url: '/demo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo'
 */
Controller0efea5765db02e3af45380ee625e3ea3.url = (options?: RouteQueryOptions) => {
    return Controller0efea5765db02e3af45380ee625e3ea3.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo'
 */
Controller0efea5765db02e3af45380ee625e3ea3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0efea5765db02e3af45380ee625e3ea3.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo'
 */
Controller0efea5765db02e3af45380ee625e3ea3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller0efea5765db02e3af45380ee625e3ea3.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo'
 */
    const Controller0efea5765db02e3af45380ee625e3ea3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller0efea5765db02e3af45380ee625e3ea3.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo'
 */
        Controller0efea5765db02e3af45380ee625e3ea3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0efea5765db02e3af45380ee625e3ea3.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo'
 */
        Controller0efea5765db02e3af45380ee625e3ea3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0efea5765db02e3af45380ee625e3ea3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller0efea5765db02e3af45380ee625e3ea3.form = Controller0efea5765db02e3af45380ee625e3ea3Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/integrations'
 */
const Controllercd5d4833a70af27fab980be503914f72 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercd5d4833a70af27fab980be503914f72.url(options),
    method: 'get',
})

Controllercd5d4833a70af27fab980be503914f72.definition = {
    methods: ["get","head"],
    url: '/integrations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/integrations'
 */
Controllercd5d4833a70af27fab980be503914f72.url = (options?: RouteQueryOptions) => {
    return Controllercd5d4833a70af27fab980be503914f72.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/integrations'
 */
Controllercd5d4833a70af27fab980be503914f72.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercd5d4833a70af27fab980be503914f72.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/integrations'
 */
Controllercd5d4833a70af27fab980be503914f72.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllercd5d4833a70af27fab980be503914f72.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/integrations'
 */
    const Controllercd5d4833a70af27fab980be503914f72Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllercd5d4833a70af27fab980be503914f72.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/integrations'
 */
        Controllercd5d4833a70af27fab980be503914f72Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllercd5d4833a70af27fab980be503914f72.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/integrations'
 */
        Controllercd5d4833a70af27fab980be503914f72Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllercd5d4833a70af27fab980be503914f72.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllercd5d4833a70af27fab980be503914f72.form = Controllercd5d4833a70af27fab980be503914f72Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/api'
 */
const Controller79dd54e7f24d036ee9383cd19ac0d55e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller79dd54e7f24d036ee9383cd19ac0d55e.url(options),
    method: 'get',
})

Controller79dd54e7f24d036ee9383cd19ac0d55e.definition = {
    methods: ["get","head"],
    url: '/api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/api'
 */
Controller79dd54e7f24d036ee9383cd19ac0d55e.url = (options?: RouteQueryOptions) => {
    return Controller79dd54e7f24d036ee9383cd19ac0d55e.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/api'
 */
Controller79dd54e7f24d036ee9383cd19ac0d55e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller79dd54e7f24d036ee9383cd19ac0d55e.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/api'
 */
Controller79dd54e7f24d036ee9383cd19ac0d55e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller79dd54e7f24d036ee9383cd19ac0d55e.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/api'
 */
    const Controller79dd54e7f24d036ee9383cd19ac0d55eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller79dd54e7f24d036ee9383cd19ac0d55e.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/api'
 */
        Controller79dd54e7f24d036ee9383cd19ac0d55eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller79dd54e7f24d036ee9383cd19ac0d55e.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/api'
 */
        Controller79dd54e7f24d036ee9383cd19ac0d55eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller79dd54e7f24d036ee9383cd19ac0d55e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller79dd54e7f24d036ee9383cd19ac0d55e.form = Controller79dd54e7f24d036ee9383cd19ac0d55eForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/changelog'
 */
const Controller9f0c4c90075dec0f7298b0e3338aad9c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9f0c4c90075dec0f7298b0e3338aad9c.url(options),
    method: 'get',
})

Controller9f0c4c90075dec0f7298b0e3338aad9c.definition = {
    methods: ["get","head"],
    url: '/changelog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/changelog'
 */
Controller9f0c4c90075dec0f7298b0e3338aad9c.url = (options?: RouteQueryOptions) => {
    return Controller9f0c4c90075dec0f7298b0e3338aad9c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/changelog'
 */
Controller9f0c4c90075dec0f7298b0e3338aad9c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9f0c4c90075dec0f7298b0e3338aad9c.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/changelog'
 */
Controller9f0c4c90075dec0f7298b0e3338aad9c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller9f0c4c90075dec0f7298b0e3338aad9c.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/changelog'
 */
    const Controller9f0c4c90075dec0f7298b0e3338aad9cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller9f0c4c90075dec0f7298b0e3338aad9c.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/changelog'
 */
        Controller9f0c4c90075dec0f7298b0e3338aad9cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9f0c4c90075dec0f7298b0e3338aad9c.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/changelog'
 */
        Controller9f0c4c90075dec0f7298b0e3338aad9cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9f0c4c90075dec0f7298b0e3338aad9c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller9f0c4c90075dec0f7298b0e3338aad9c.form = Controller9f0c4c90075dec0f7298b0e3338aad9cForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
const Controller0281689d11c3db12eb0f0bc21b3e4ed4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

Controller0281689d11c3db12eb0f0bc21b3e4ed4.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4.url = (options?: RouteQueryOptions) => {
    return Controller0281689d11c3db12eb0f0bc21b3e4ed4.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
    const Controller0281689d11c3db12eb0f0bc21b3e4ed4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
        Controller0281689d11c3db12eb0f0bc21b3e4ed4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
        Controller0281689d11c3db12eb0f0bc21b3e4ed4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller0281689d11c3db12eb0f0bc21b3e4ed4.form = Controller0281689d11c3db12eb0f0bc21b3e4ed4Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
const Controller03d31eb80a178b8caec7a6c184c0169b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'get',
})

Controller03d31eb80a178b8caec7a6c184c0169b.definition = {
    methods: ["get","head"],
    url: '/careers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169b.url = (options?: RouteQueryOptions) => {
    return Controller03d31eb80a178b8caec7a6c184c0169b.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
    const Controller03d31eb80a178b8caec7a6c184c0169bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
        Controller03d31eb80a178b8caec7a6c184c0169bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
        Controller03d31eb80a178b8caec7a6c184c0169bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller03d31eb80a178b8caec7a6c184c0169b.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller03d31eb80a178b8caec7a6c184c0169b.form = Controller03d31eb80a178b8caec7a6c184c0169bForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/press'
 */
const Controller9e33eda9ad48b2d675bce8ea65b1be7f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9e33eda9ad48b2d675bce8ea65b1be7f.url(options),
    method: 'get',
})

Controller9e33eda9ad48b2d675bce8ea65b1be7f.definition = {
    methods: ["get","head"],
    url: '/press',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/press'
 */
Controller9e33eda9ad48b2d675bce8ea65b1be7f.url = (options?: RouteQueryOptions) => {
    return Controller9e33eda9ad48b2d675bce8ea65b1be7f.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/press'
 */
Controller9e33eda9ad48b2d675bce8ea65b1be7f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9e33eda9ad48b2d675bce8ea65b1be7f.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/press'
 */
Controller9e33eda9ad48b2d675bce8ea65b1be7f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller9e33eda9ad48b2d675bce8ea65b1be7f.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/press'
 */
    const Controller9e33eda9ad48b2d675bce8ea65b1be7fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller9e33eda9ad48b2d675bce8ea65b1be7f.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/press'
 */
        Controller9e33eda9ad48b2d675bce8ea65b1be7fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9e33eda9ad48b2d675bce8ea65b1be7f.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/press'
 */
        Controller9e33eda9ad48b2d675bce8ea65b1be7fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9e33eda9ad48b2d675bce8ea65b1be7f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller9e33eda9ad48b2d675bce8ea65b1be7f.form = Controller9e33eda9ad48b2d675bce8ea65b1be7fForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
const Controller36402f3b102b68b92616e946647e00cf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
})

Controller36402f3b102b68b92616e946647e00cf.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.url = (options?: RouteQueryOptions) => {
    return Controller36402f3b102b68b92616e946647e00cf.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
    const Controller36402f3b102b68b92616e946647e00cfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller36402f3b102b68b92616e946647e00cf.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
        Controller36402f3b102b68b92616e946647e00cfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller36402f3b102b68b92616e946647e00cf.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
        Controller36402f3b102b68b92616e946647e00cfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller36402f3b102b68b92616e946647e00cf.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller36402f3b102b68b92616e946647e00cf.form = Controller36402f3b102b68b92616e946647e00cfForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/help'
 */
const Controller26c4432b7bec8fce8c490f1f9e378643 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller26c4432b7bec8fce8c490f1f9e378643.url(options),
    method: 'get',
})

Controller26c4432b7bec8fce8c490f1f9e378643.definition = {
    methods: ["get","head"],
    url: '/help',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/help'
 */
Controller26c4432b7bec8fce8c490f1f9e378643.url = (options?: RouteQueryOptions) => {
    return Controller26c4432b7bec8fce8c490f1f9e378643.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/help'
 */
Controller26c4432b7bec8fce8c490f1f9e378643.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller26c4432b7bec8fce8c490f1f9e378643.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/help'
 */
Controller26c4432b7bec8fce8c490f1f9e378643.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller26c4432b7bec8fce8c490f1f9e378643.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/help'
 */
    const Controller26c4432b7bec8fce8c490f1f9e378643Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller26c4432b7bec8fce8c490f1f9e378643.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/help'
 */
        Controller26c4432b7bec8fce8c490f1f9e378643Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller26c4432b7bec8fce8c490f1f9e378643.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/help'
 */
        Controller26c4432b7bec8fce8c490f1f9e378643Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller26c4432b7bec8fce8c490f1f9e378643.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller26c4432b7bec8fce8c490f1f9e378643.form = Controller26c4432b7bec8fce8c490f1f9e378643Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/community'
 */
const Controllere02de3ed679a8db5bea2964196dd7d5d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere02de3ed679a8db5bea2964196dd7d5d.url(options),
    method: 'get',
})

Controllere02de3ed679a8db5bea2964196dd7d5d.definition = {
    methods: ["get","head"],
    url: '/community',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/community'
 */
Controllere02de3ed679a8db5bea2964196dd7d5d.url = (options?: RouteQueryOptions) => {
    return Controllere02de3ed679a8db5bea2964196dd7d5d.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/community'
 */
Controllere02de3ed679a8db5bea2964196dd7d5d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere02de3ed679a8db5bea2964196dd7d5d.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/community'
 */
Controllere02de3ed679a8db5bea2964196dd7d5d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere02de3ed679a8db5bea2964196dd7d5d.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/community'
 */
    const Controllere02de3ed679a8db5bea2964196dd7d5dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere02de3ed679a8db5bea2964196dd7d5d.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/community'
 */
        Controllere02de3ed679a8db5bea2964196dd7d5dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere02de3ed679a8db5bea2964196dd7d5d.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/community'
 */
        Controllere02de3ed679a8db5bea2964196dd7d5dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere02de3ed679a8db5bea2964196dd7d5d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere02de3ed679a8db5bea2964196dd7d5d.form = Controllere02de3ed679a8db5bea2964196dd7d5dForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/templates'
 */
const Controllera4c5e750cc254f5b98f0c9d090f8a6d9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera4c5e750cc254f5b98f0c9d090f8a6d9.url(options),
    method: 'get',
})

Controllera4c5e750cc254f5b98f0c9d090f8a6d9.definition = {
    methods: ["get","head"],
    url: '/templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/templates'
 */
Controllera4c5e750cc254f5b98f0c9d090f8a6d9.url = (options?: RouteQueryOptions) => {
    return Controllera4c5e750cc254f5b98f0c9d090f8a6d9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/templates'
 */
Controllera4c5e750cc254f5b98f0c9d090f8a6d9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera4c5e750cc254f5b98f0c9d090f8a6d9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/templates'
 */
Controllera4c5e750cc254f5b98f0c9d090f8a6d9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera4c5e750cc254f5b98f0c9d090f8a6d9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/templates'
 */
    const Controllera4c5e750cc254f5b98f0c9d090f8a6d9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera4c5e750cc254f5b98f0c9d090f8a6d9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/templates'
 */
        Controllera4c5e750cc254f5b98f0c9d090f8a6d9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera4c5e750cc254f5b98f0c9d090f8a6d9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/templates'
 */
        Controllera4c5e750cc254f5b98f0c9d090f8a6d9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera4c5e750cc254f5b98f0c9d090f8a6d9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera4c5e750cc254f5b98f0c9d090f8a6d9.form = Controllera4c5e750cc254f5b98f0c9d090f8a6d9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/shortcuts'
 */
const Controllerc8dcc9ce2c735013f779ca645abc9d25 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc8dcc9ce2c735013f779ca645abc9d25.url(options),
    method: 'get',
})

Controllerc8dcc9ce2c735013f779ca645abc9d25.definition = {
    methods: ["get","head"],
    url: '/shortcuts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/shortcuts'
 */
Controllerc8dcc9ce2c735013f779ca645abc9d25.url = (options?: RouteQueryOptions) => {
    return Controllerc8dcc9ce2c735013f779ca645abc9d25.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/shortcuts'
 */
Controllerc8dcc9ce2c735013f779ca645abc9d25.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc8dcc9ce2c735013f779ca645abc9d25.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/shortcuts'
 */
Controllerc8dcc9ce2c735013f779ca645abc9d25.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerc8dcc9ce2c735013f779ca645abc9d25.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/shortcuts'
 */
    const Controllerc8dcc9ce2c735013f779ca645abc9d25Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerc8dcc9ce2c735013f779ca645abc9d25.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/shortcuts'
 */
        Controllerc8dcc9ce2c735013f779ca645abc9d25Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc8dcc9ce2c735013f779ca645abc9d25.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/shortcuts'
 */
        Controllerc8dcc9ce2c735013f779ca645abc9d25Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc8dcc9ce2c735013f779ca645abc9d25.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerc8dcc9ce2c735013f779ca645abc9d25.form = Controllerc8dcc9ce2c735013f779ca645abc9d25Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/status'
 */
const Controller231ffa8b6cfd3f3a1f3d57b1a4799d91 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.url(options),
    method: 'get',
})

Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.definition = {
    methods: ["get","head"],
    url: '/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/status'
 */
Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.url = (options?: RouteQueryOptions) => {
    return Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/status'
 */
Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/status'
 */
Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/status'
 */
    const Controller231ffa8b6cfd3f3a1f3d57b1a4799d91Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/status'
 */
        Controller231ffa8b6cfd3f3a1f3d57b1a4799d91Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/status'
 */
        Controller231ffa8b6cfd3f3a1f3d57b1a4799d91Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller231ffa8b6cfd3f3a1f3d57b1a4799d91.form = Controller231ffa8b6cfd3f3a1f3d57b1a4799d91Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
const Controllera2c058616aeb0c9393ca03a98bc05c02 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})

Controllera2c058616aeb0c9393ca03a98bc05c02.definition = {
    methods: ["get","head"],
    url: '/privacy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
Controllera2c058616aeb0c9393ca03a98bc05c02.url = (options?: RouteQueryOptions) => {
    return Controllera2c058616aeb0c9393ca03a98bc05c02.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
Controllera2c058616aeb0c9393ca03a98bc05c02.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
Controllera2c058616aeb0c9393ca03a98bc05c02.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
    const Controllera2c058616aeb0c9393ca03a98bc05c02Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
        Controllera2c058616aeb0c9393ca03a98bc05c02Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
        Controllera2c058616aeb0c9393ca03a98bc05c02Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera2c058616aeb0c9393ca03a98bc05c02.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera2c058616aeb0c9393ca03a98bc05c02.form = Controllera2c058616aeb0c9393ca03a98bc05c02Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
const Controller619dc3a99425f668ea9cab64e6648cb4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})

Controller619dc3a99425f668ea9cab64e6648cb4.definition = {
    methods: ["get","head"],
    url: '/terms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
Controller619dc3a99425f668ea9cab64e6648cb4.url = (options?: RouteQueryOptions) => {
    return Controller619dc3a99425f668ea9cab64e6648cb4.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
Controller619dc3a99425f668ea9cab64e6648cb4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
Controller619dc3a99425f668ea9cab64e6648cb4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
    const Controller619dc3a99425f668ea9cab64e6648cb4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
        Controller619dc3a99425f668ea9cab64e6648cb4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
        Controller619dc3a99425f668ea9cab64e6648cb4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller619dc3a99425f668ea9cab64e6648cb4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller619dc3a99425f668ea9cab64e6648cb4.form = Controller619dc3a99425f668ea9cab64e6648cb4Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/cookies'
 */
const Controllera2054ddf4ed5c656396a4f4d9d64c843 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'get',
})

Controllera2054ddf4ed5c656396a4f4d9d64c843.definition = {
    methods: ["get","head"],
    url: '/cookies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/cookies'
 */
Controllera2054ddf4ed5c656396a4f4d9d64c843.url = (options?: RouteQueryOptions) => {
    return Controllera2054ddf4ed5c656396a4f4d9d64c843.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/cookies'
 */
Controllera2054ddf4ed5c656396a4f4d9d64c843.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/cookies'
 */
Controllera2054ddf4ed5c656396a4f4d9d64c843.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/cookies'
 */
    const Controllera2054ddf4ed5c656396a4f4d9d64c843Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/cookies'
 */
        Controllera2054ddf4ed5c656396a4f4d9d64c843Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/cookies'
 */
        Controllera2054ddf4ed5c656396a4f4d9d64c843Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera2054ddf4ed5c656396a4f4d9d64c843.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera2054ddf4ed5c656396a4f4d9d64c843.form = Controllera2054ddf4ed5c656396a4f4d9d64c843Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/security'
 */
const Controlleracecbdbe6b3af59cc804a0685659fa89 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controlleracecbdbe6b3af59cc804a0685659fa89.url(options),
    method: 'get',
})

Controlleracecbdbe6b3af59cc804a0685659fa89.definition = {
    methods: ["get","head"],
    url: '/security',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/security'
 */
Controlleracecbdbe6b3af59cc804a0685659fa89.url = (options?: RouteQueryOptions) => {
    return Controlleracecbdbe6b3af59cc804a0685659fa89.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/security'
 */
Controlleracecbdbe6b3af59cc804a0685659fa89.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controlleracecbdbe6b3af59cc804a0685659fa89.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/security'
 */
Controlleracecbdbe6b3af59cc804a0685659fa89.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controlleracecbdbe6b3af59cc804a0685659fa89.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/security'
 */
    const Controlleracecbdbe6b3af59cc804a0685659fa89Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controlleracecbdbe6b3af59cc804a0685659fa89.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/security'
 */
        Controlleracecbdbe6b3af59cc804a0685659fa89Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controlleracecbdbe6b3af59cc804a0685659fa89.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/security'
 */
        Controlleracecbdbe6b3af59cc804a0685659fa89Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controlleracecbdbe6b3af59cc804a0685659fa89.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controlleracecbdbe6b3af59cc804a0685659fa89.form = Controlleracecbdbe6b3af59cc804a0685659fa89Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
    const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

/**
* Multiple routes resolve to \Inertia\Controller::Controller, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `Controller['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/features': Controllere11e990c70acccc8d577821f34aa7efa,
    '/how-it-works': Controllere280bd4480a1a407d040b2ba05691060,
    '/pricing': Controllera6735397690d30570f358ff62fa3ef24,
    '/about': Controller535fd093ca1d5254af5dc12ac208e8d5,
    '/demo': Controller0efea5765db02e3af45380ee625e3ea3,
    '/integrations': Controllercd5d4833a70af27fab980be503914f72,
    '/api': Controller79dd54e7f24d036ee9383cd19ac0d55e,
    '/changelog': Controller9f0c4c90075dec0f7298b0e3338aad9c,
    '/blog': Controller0281689d11c3db12eb0f0bc21b3e4ed4,
    '/careers': Controller03d31eb80a178b8caec7a6c184c0169b,
    '/press': Controller9e33eda9ad48b2d675bce8ea65b1be7f,
    '/contact': Controller36402f3b102b68b92616e946647e00cf,
    '/help': Controller26c4432b7bec8fce8c490f1f9e378643,
    '/community': Controllere02de3ed679a8db5bea2964196dd7d5d,
    '/templates': Controllera4c5e750cc254f5b98f0c9d090f8a6d9,
    '/shortcuts': Controllerc8dcc9ce2c735013f779ca645abc9d25,
    '/status': Controller231ffa8b6cfd3f3a1f3d57b1a4799d91,
    '/privacy': Controllera2c058616aeb0c9393ca03a98bc05c02,
    '/terms': Controller619dc3a99425f668ea9cab64e6648cb4,
    '/cookies': Controllera2054ddf4ed5c656396a4f4d9d64c843,
    '/security': Controlleracecbdbe6b3af59cc804a0685659fa89,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller