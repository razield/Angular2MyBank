System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageModel;
    return {
        setters:[],
        execute: function() {
            MessageModel = (function () {
                function MessageModel(de, para, fecha, estado, mensaje) {
                    this.de = de;
                    this.para = para;
                    this.fecha = fecha;
                    this.estado = estado;
                    this.mensaje = mensaje;
                }
                return MessageModel;
            }());
            exports_1("MessageModel", MessageModel);
        }
    }
});
//# sourceMappingURL=message.model.js.map