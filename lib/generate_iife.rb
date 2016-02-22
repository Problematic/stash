class GenerateIIFE
  def call(input)
    { data: "(function () {\n\n#{input[:data]}\n\n}());" }
  end
end
