var PageComponent = function PageComponent( component ){
    if( this instanceof PageComponent ){
        this.component = component;

        PageComponent.list.push( this );

    }else{
        return new PageComponent( component );
    }
};

PageComponent.list = [ ];

PageComponent.prototype.hideAllPageComponents = function hideAllPageComponents( ){
    _( PageComponent.list )
        .each( function onEachPageComponent( page ){
            page.hide( );
        } );

    return this;
};

PageComponent.prototype.showOnlyThisPageComponent = function showOnlyThisPageComponent( ){
    this.hideAllPageComponents( );

    this.component.show( );

    return this;
};
