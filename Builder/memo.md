# memo

Directorを読んでBuilderの中身を構築した後、Builderのメソッドを呼んで状態を取得するのは何となく気持ちが悪い…  
Director.construct() がバリバリ副作用があるだけでなく、Director自身ではなくBuilderの状態を変更するので影響範囲が分かりづらいような気がする。  
せめてgetResult()がBuilderではなくDirectorにあったり、construct() が構築したオブジェクトの結果を返すようにすれば分かりやすい気がする。  
こういう構造になってる利点はなんだろう
