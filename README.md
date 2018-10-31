# My Store ミニアプリ

超ミニオンラインストアを実装してみよう。

クライアントはVueJS、サーバサイドはExpressJS、データベースはMySQLとなります。

[こちらが参考動画です](https://youtu.be/R0G9cSONSbQ)

まずはデータベースセットアップを行います。MySQLをインストールして実行してください：

```bash
# install mysql
brew install mysql
# start mysql
mysql.server start

# stop mysql (If you want to stop it)
mysql.server stop
```

## コンテンツ：

* [Month 2 Git Workflow](https://github.com/bootcamp-tpa/tpa-resources/wiki/2%E3%83%B6%E6%9C%88%E7%9B%AE-Git-%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%95%E3%83%AD%E3%83%BC)
* Checkpoints
  * [Checkpoint 1 README](#checkpoint-1)
  * [Checkpoint 2 README](#checkpoint-2)
  * [Checkpoint 3 README](#checkpoint-3)
  * [Checkpoint 4 README](#checkpoint-4)
  * [Checkpoint 5 README](#checkpoint-5)
* [Starting the App](#starting-the-app)

***

# Checkpoint-1

まずはデータベースを作成します。`server/db/schema.sql` ファイルがデータベースを作成し、テーブル型を定義します。

```bash
# プロジェクトフォルダー内から
mysql -u root < server/db/schema.sql
```

次はデータ初期化用のデータをデータベースに入力します。このデータベース初期化用のデータを **seed data** と呼びます。`server/db/items.sql` にシードデータを入力するクエリーが書いてあります。こちらのコマンドをターミナルから実行しみてください：

```bash
# プロジェクトフォルダー内から
mysql -u root < server/db/items.sql
```

ここで、今の所やってきたことを確認するためMySQLに接続して、データベースを選んで、テーブルを読み込むコマンドを紹介します：

ターミナル：

```bash
mysql -u root
```

MySQL：

```mysql
show databases; # データベースを表示する（必要ではない)
use my_store;

show tables; # テーブルを表示する（必要ではない）
select * from items;
```

最後に、テーブルを削除するクエリーです：

```mysql
drop database my_store;
```

今日の課題は schema と seed data を変更してみるので、上記のコマンドを利用して結果を確認してください。

**タスク：**

* `schema.sql` の `items` テーブル定義に `image_url` カラムを追加しよう
* `items.sql` の各アイテムに `image_url` フィールドを追加しよう。(イメージは適当にググってURLを使ってOK）
データベースを削除し、schema.sql と items.sql を使用し、データベースを作り直して変更を確認しよう


# Checkpoint-2

Express のルートハンドラーを追加するにはこちらのコードを使用します：

```javascript
app.get(‘/your-endpoint’, function(req, res) {
  // …
});
```

`items` テーブルの全行をMySQLで取得するためにはこちらのクエリーとなります：

```mysql
select id, name, price, image_url from ‘items’
```

**タスク：**

* サーバ側で、クライアントが全itemsを取得できるように `GET` `/api/items` ルートを追加しよう。
  * データベースから読み込むために mysql2 ライブラリーを使用してください。
  * `db/connection.js` に参考があります。
* POSTMAN で HTTP Request をサーバへ送って、データを取得できるか確認してください

**リンク：**

* [MySQL First Query](https://www.npmjs.com/package/mysql2#first-query)
  * 現在のコードは[MySQL2 プロミス版](https://www.npmjs.com/package/mysql2#using-promise-wrapper) を使用しています

# Checkpoint-3

アイテムを追加したい時はこちらがMySQLクエリーとなります：

```mysql
INSERT INTO items (name, price, image_url) VALUES (‘asdf’, ‘100’, ‘http://example.com/some-image.jpeg’)
```

**タスク：**

* クライアントがアイテムを追加できるようにサーバ側に `POST` `/api/items` を追加しよう
  * クライアントから送られるname, price, imageUrl をJSON Bodyから取得するためには[req.body](https://expressjs.com/ja/api.html#req.body)を使用しよう。
  * connection.query を使用してデータベースに `insert into …` クエリーを送ろう
  * クライアントの入力をクエリーの入力として渡すためには [Mysql2 docs first-query](https://www.npmjs.com/package/mysql2#first-query) の `// with placeholder` とコメントされてる参考が役にたちます。
* POSTMANでPOSTリクエストを送り、GETリクエストでアイテムが追加されたかを確認しよう。

# Checkpoint-4

今日からクライアントの実装をします！

**タスク：**

* クライアント側のListings.vueで `api-service.getItems` を利用してアイテムを取得し、全て表示しよう
* 横に表示するためCSSスタイルを追加しよう

**リンク：**

* [v-for文](https://jp.vuejs.org/v2/guide/list.html)
* レイアウトのためには[flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)がおすすめです

# Checkpoint-5

**タスク：**

* クライアント側のAdmin.vueでHTMLフォームを作成し、サブミットされたら`api-service.createItem` を利用し、サーバへ新アイテムを送ろう
  * [VueJS フォーム入力バインディング](https://jp.vuejs.org/v2/guide/forms.html)をまず読んでおくのがおすすめです
* POSTリクエストの送信が確認されたら、ユーザへ「送ったよ」と確認メッセージを表示しよう

**リンク：**

* [VueJS フォーム入力バインディング](https://jp.vuejs.org/v2/guide/forms.html)

### 以上です！お疲れ様でした！

***

# Starting the App

```bash
# install dependencies
npm install

# serve the client app with hot reload at localhost:8080
# also runs the API server at localhost:3000
npm start
```

Building the app for production:

```bash
# build for production with minification
npm run build
```
