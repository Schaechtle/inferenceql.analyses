// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.components.query.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('inferenceql.viz.components.store.db');
inferenceql.viz.components.query.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dataset_DASH_name,cljs.core.cst$kw$data,cljs.core.cst$kw$model_DASH_name,cljs.core.cst$kw$model], null)], null);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query_DASH_component,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_dataset_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_model_DASH_name], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_virtual,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_details,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema_DASH_base], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_dataset_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_model_DASH_name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_virtual,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_details,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema_DASH_base], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27151){
return cljs.core.map_QMARK_(G__27151);
}),(function (G__27151){
return cljs.core.contains_QMARK_(G__27151,cljs.core.cst$kw$dataset_DASH_name);
}),(function (G__27151){
return cljs.core.contains_QMARK_(G__27151,cljs.core.cst$kw$model_DASH_name);
})], null),(function (G__27151){
return ((cljs.core.map_QMARK_(G__27151)) && (((cljs.core.contains_QMARK_(G__27151,cljs.core.cst$kw$dataset_DASH_name)) && (cljs.core.contains_QMARK_(G__27151,cljs.core.cst$kw$model_DASH_name)))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$virtual,cljs.core.cst$kw$column_DASH_details,cljs.core.cst$kw$query,cljs.core.cst$kw$schema,cljs.core.cst$kw$schema_DASH_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_dataset_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_model_DASH_name], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dataset_DASH_name,cljs.core.cst$kw$model_DASH_name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_virtual,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_details,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema_DASH_base], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$dataset_DASH_name)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$model_DASH_name))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_dataset_DASH_name,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_model_DASH_name,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_virtual,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_detail_DASH_type,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$new_DASH_column_DASH_schema,"null",cljs.core.cst$kw$rename,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$new_DASH_column_DASH_schema,null,cljs.core.cst$kw$rename,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_old_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_column_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_column_DASH_name);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_new_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_column_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_column_DASH_name);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_column_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_column_DASH_name);
if((typeof inferenceql !== 'undefined') && (typeof inferenceql.viz !== 'undefined') && (typeof inferenceql.viz.components !== 'undefined') && (typeof inferenceql.viz.components.query !== 'undefined') && (typeof inferenceql.viz.components.query.db !== 'undefined') && (typeof inferenceql.viz.components.query.db.column_detail_type !== 'undefined')){
} else {
inferenceql.viz.components.query.db.column_detail_type = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__27152 = cljs.core.get_global_hierarchy;
return (fexpr__27152.cljs$core$IFn$_invoke$arity$0 ? fexpr__27152.cljs$core$IFn$_invoke$arity$0() : fexpr__27152.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("inferenceql.viz.components.query.db","column-detail-type"),cljs.core.cst$kw$detail_DASH_type,cljs.core.cst$kw$default,hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
inferenceql.viz.components.query.db.column_detail_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rename,(function (_){
return cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_detail_DASH_type,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_old_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_new_DASH_name], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27153){
return cljs.core.map_QMARK_(G__27153);
}),(function (G__27153){
return cljs.core.contains_QMARK_(G__27153,cljs.core.cst$kw$detail_DASH_type);
}),(function (G__27153){
return cljs.core.contains_QMARK_(G__27153,cljs.core.cst$kw$old_DASH_name);
}),(function (G__27153){
return cljs.core.contains_QMARK_(G__27153,cljs.core.cst$kw$new_DASH_name);
})], null),(function (G__27153){
return ((cljs.core.map_QMARK_(G__27153)) && (((cljs.core.contains_QMARK_(G__27153,cljs.core.cst$kw$detail_DASH_type)) && (((cljs.core.contains_QMARK_(G__27153,cljs.core.cst$kw$old_DASH_name)) && (cljs.core.contains_QMARK_(G__27153,cljs.core.cst$kw$new_DASH_name)))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_detail_DASH_type,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_old_DASH_name,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_new_DASH_name], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$detail_DASH_type,cljs.core.cst$kw$old_DASH_name,cljs.core.cst$kw$new_DASH_name], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$detail_DASH_type)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$old_DASH_name)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$new_DASH_name))], null),null]));
}));
inferenceql.viz.components.query.db.column_detail_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new_DASH_column_DASH_schema,(function (_){
return cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_detail_DASH_type,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_stat_DASH_type], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27154){
return cljs.core.map_QMARK_(G__27154);
}),(function (G__27154){
return cljs.core.contains_QMARK_(G__27154,cljs.core.cst$kw$detail_DASH_type);
}),(function (G__27154){
return cljs.core.contains_QMARK_(G__27154,cljs.core.cst$kw$name);
}),(function (G__27154){
return cljs.core.contains_QMARK_(G__27154,cljs.core.cst$kw$stat_DASH_type);
})], null),(function (G__27154){
return ((cljs.core.map_QMARK_(G__27154)) && (((cljs.core.contains_QMARK_(G__27154,cljs.core.cst$kw$detail_DASH_type)) && (((cljs.core.contains_QMARK_(G__27154,cljs.core.cst$kw$name)) && (cljs.core.contains_QMARK_(G__27154,cljs.core.cst$kw$stat_DASH_type)))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_detail_DASH_type,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_name,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_stat_DASH_type], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$detail_DASH_type,cljs.core.cst$kw$name,cljs.core.cst$kw$stat_DASH_type], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$detail_DASH_type)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$name)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$stat_DASH_type))], null),null]));
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_details,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_detail),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_detail,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_detail,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27155){
return cljs.core.coll_QMARK_(G__27155);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_detail)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_column_DASH_detail,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec,cljs.core.cst$sym$inferenceql$viz$components$query$db_SLASH_column_DASH_detail_DASH_type,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_detail_DASH_type),cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$inferenceql$viz$components$query$db_SLASH_column_DASH_detail_DASH_type,new cljs.core.Var(function(){return inferenceql.viz.components.query.db.column_detail_type;},cljs.core.cst$sym$inferenceql$viz$components$query$db_SLASH_column_DASH_detail_DASH_type,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$inferenceql$viz$components$query$db,cljs.core.cst$sym$column_DASH_detail_DASH_type,"/home/ulli/.gitlibs/libs/probcomp/inferenceql.viz/b9432be71a76e6fb8f4b77d93859278936734320/src/inferenceql/viz/components/query/db.cljs",29,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(inferenceql.viz.components.query.db.column_detail_type)?inferenceql.viz.components.query.db.column_detail_type.cljs$lang$test:null)])),cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_detail_DASH_type));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_schema,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_schema);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_schema_DASH_base,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_schema,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_schema);
inferenceql.viz.components.query.db.query = (function inferenceql$viz$components$query$db$query(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_component,cljs.core.cst$kw$query], null));
});
inferenceql.viz.components.query.db.model_name = (function inferenceql$viz$components$query$db$model_name(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_component,cljs.core.cst$kw$model_DASH_name], null));
});
inferenceql.viz.components.query.db.schema_base = (function inferenceql$viz$components$query$db$schema_base(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_component,cljs.core.cst$kw$schema_DASH_base], null));
});
inferenceql.viz.components.query.db.schema = (function inferenceql$viz$components$query$db$schema(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_component,cljs.core.cst$kw$schema], null));
});
