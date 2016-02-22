require 'generate_iife'

Sprockets.register_preprocessor('application/javascript', GenerateIIFE.new)
