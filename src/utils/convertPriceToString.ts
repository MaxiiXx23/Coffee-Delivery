export function convertPriceToString(price: number): string {
  const priceString = String(price).padEnd(4, '0')
  const priceFormatted = priceString.replace('.', ',')
  return priceFormatted
}
