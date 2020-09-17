async function bar () {
  return {
    a: await Promise.resolve(1),
    b: await Promise.resolve(2),
    c: await Promise.resolve(3),
    d: await Promise.resolve(4),
    e: await Promise.resolve(5),
    f: await Promise.resolve(6),
    g: await Promise.resolve(7),
    h: await Promise.resolve(8),
    // If you uncomment the next line all promise results equal 9
    // i: await Promise.resolve(9),
  }
}

bar().then(console.log)
