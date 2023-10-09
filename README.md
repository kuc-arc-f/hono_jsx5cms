# hono_jsx5cms

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/10/09 

 update  : 

***
### Summary

hono + cloudflare workers + D1,  CMS sample

***
### wrangler.toml, setting

* db setting, sample
```
name = "hono_jsx5cms"
main = "src/index.ts"
compatibility_date = "2023-09-01"
node_compat = true

[site]
bucket = "./public"

[vars]
#API_KEY = "123"

[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = ""
database_id = ""


```
***
### blog 

***

