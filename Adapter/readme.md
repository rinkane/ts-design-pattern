# Adapter

## 継承

Adaptee(今回だとCounter class)を継承してAdapterクラスを作る場合、外からAdapteeのインターフェースが見えてしまうので、
それを避ける為には継承ではなくインスタンスを持つ実装でやった方が良さそう。

## その他注意点

あくまでAdapter, Wrapperとして作るため、Adapterとして提供したいインタフェースとAdapteeが提供する機能に違いがある場合は、
Adapterとして抽象化を行う層と、Adapterとそれを利用するクラスの間の違いを吸収する層とで分けたほうが良い場合もありそう。
